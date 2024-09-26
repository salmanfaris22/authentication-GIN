package middleware

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func LogineMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		start := time.Now()
		ctx.Next()
		duration := time.Since(start)
		fmt.Println("Reqst", ctx.Request.Method, ctx.Request.URL, "duration", duration)
	}
}
