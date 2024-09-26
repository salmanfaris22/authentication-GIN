package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Logout(ctx *gin.Context) {
	// var getUser string
	// err := ctx.BindJSON(&getUser)
	// if err != nil {
	// 	ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }
	// ctx.SetCookie(getUser, "", -1, "/", "localhost", false, true)

	ctx.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}
