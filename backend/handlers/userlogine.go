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
	err = FindUser(getUser.Email)
	if err == nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "pleas Register"})
		return
	}
	user, Newerr := Passwormatch(getUser.Password)
	if Newerr != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	http.SetCookie(ctx.Writer, &http.Cookie{
		Name:     getUser.Email,
		Value:    user.FirstName,
		Path:     "/",
		HttpOnly: true, // Helps prevent XSS
		Secure:   true, // Use only if using HTTPS
		SameSite: http.SameSiteLaxMode,
		MaxAge:   3600,
	})
	ctx.JSON(200, gin.H{"message": "logine succefully",
		"welcome": user.FirstName,
	})

}
