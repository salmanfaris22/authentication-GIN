package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Logout(ctx *gin.Context) {
	http.SetCookie(ctx.Writer, &http.Cookie{
		Name:   "",
		Value:  "",
		Path:   "/",
		MaxAge: -1,
	})
	ctx.JSON(200, gin.H{"message": "logout successful"})
}
