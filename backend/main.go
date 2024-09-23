package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"main.go/handlers"
)

func main() {
	server := gin.Default()

	// CORS configuration
	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Replace with your React app's URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		AllowCredentials: true, // Allow cookies
		ExposeHeaders:    []string{"Content-Length"},
		MaxAge:           12 * 3600, // 12 hours
	}))

	// Define your routes
	server.GET("/", handlers.Geting)
	server.POST("/login", handlers.Login)
	server.POST("/register", handlers.Register)
	server.POST("/logout", handlers.Logout)

	// Run the server
	server.Run(":8080")
}
