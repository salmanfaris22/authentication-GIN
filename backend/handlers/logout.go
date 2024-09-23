package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model"
)

func Logout(ctx *gin.Context) {
	var getUser model.User
	err := ctx.BindJSON(&getUser)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	http.SetCookie(ctx.Writer, &http.Cookie{
		Name:     getUser.ID, // Same name as used in Login
		Value:    "",         // Clear the value
		Path:     "/",        // Same path used when the cookie was created
		HttpOnly: true,
		Secure:   false, // Change to true in production with HTTPS
		SameSite: http.SameSiteLaxMode,
		MaxAge:   -1, // This will clear the cookie
	})

	ctx.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}
