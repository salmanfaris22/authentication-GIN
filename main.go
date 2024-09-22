package main

import (
	"github.com/gin-gonic/gin"
	"main.go/handlers"
)

func main() {

	server := gin.Default()
	server.GET("/", handlers.Geting)
	server.POST("/login", handlers.Login)

	server.POST("/register", handlers.Register)
	server.POST("/logout", handlers.Logout)
	server.Run()
}
