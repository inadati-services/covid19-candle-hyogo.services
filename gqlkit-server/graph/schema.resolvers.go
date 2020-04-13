package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"gqlkit/env"
	"gqlkit/graph/generated"
	"gqlkit/graph/model"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)

func (r *queryResolver) ReadPatientInfos(ctx context.Context) ([]*model.PatientInfo, error) {
	db, err := gorm.Open("postgres", env.DB_CONNECT)
	defer db.Close()
	if err != nil {
		return nil, fmt.Errorf(err.Error())
	}

	db.Order("date desc").Find(&r.patient_infos)
	return r.patient_infos, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
