package handlers

import "github.com/gin-gonic/gin"

func Geting(ctx *gin.Context) {
	ctx.JSON(200, users)
}
