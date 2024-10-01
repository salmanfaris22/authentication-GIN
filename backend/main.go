package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"main.go/handlers"
	"main.go/middleware"
)

func main() {
	server := gin.Default()

	server.Use(middleware.LogineMiddleware())

	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		AllowCredentials: true,
		ExposeHeaders:    []string{"Content-Length"},
		MaxAge:           12 * 3600,
	}))

	server.GET("/", handlers.Geting)
	server.POST("/login", handlers.Login)
	server.POST("/register", handlers.Register)
	server.POST("/logout", handlers.Logout)

	server.Run(":8080")

}
