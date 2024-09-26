package handlers

import (
	"sync"

	"main.go/model"
)

var (
	
	users = []model.User{{
		ID: "1",
		 FirstName: "salman",
		 LastName: "faris", 
		 Email: "salman@gmail.com", 
		 Password: "salman",
	}}
	lastId = 1
	mu     sync.Mutex
)
