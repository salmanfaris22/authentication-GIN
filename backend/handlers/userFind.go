package handlers

import (
	"errors"

	"main.go/model"
)

func FindUser(mail string) error {

	for _, v := range users {
		if v.Email == mail {
			return errors.New("mail alredy userd")
		}
	}
	return nil
}

func FindUsers(mail string) error {

	for _, v := range users {
		if v.Email == mail {
			return nil
		}
	}
	return errors.New("not maching mail")
}
func Passwormatch(pas string) (*model.User, error) {
	for _, v := range users {
		if v.Password == pas {
			return &v, nil
		}
	}
	return nil, errors.New("password Not Match")
}
