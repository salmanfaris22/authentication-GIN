package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model"
)

func Login(ctx *gin.Context) {
	var getUser model.User
	err := ctx.BindJSON(&getUser)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	err = FindUsers(getUser.Email)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, err.Error())
		return
	}
	user, Newerr := Passwormatch(getUser.Password)
	if Newerr != nil {
		ctx.JSON(http.StatusInternalServerError, Newerr.Error())
		return
	}

	http.SetCookie(ctx.Writer, &http.Cookie{
		Name:     user.ID + user.FirstName,
		Value:    user.FirstName,
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteLaxMode,
		MaxAge:   3600,
	})
	ctx.JSON(200, gin.H{"message": "logine succefully",
		"welcome": user.FirstName,
		"id":      user.ID,
	})

}
