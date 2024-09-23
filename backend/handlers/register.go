package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"main.go/model"
)

func Register(ctx *gin.Context) {
	var newUser model.User
	err := ctx.BindJSON(&newUser)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = FindUser(newUser.Email)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	mu.Lock()
	lastId++
	newUser.ID = strconv.Itoa(lastId)
	mu.Unlock()
	users = append(users, newUser)
	ctx.JSON(200, newUser)
}
