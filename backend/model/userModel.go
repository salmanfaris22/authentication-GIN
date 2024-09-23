package model

import "github.com/go-playground/validator/v10"

type User struct {
	ID        string `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email" binding:"required,email"`
	Password  string `json:"password" binding:"required,min=6"`
}

var validate *validator.Validate

func init() {
	validate = validator.New()
}
