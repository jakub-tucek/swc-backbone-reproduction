import Backbone from "backbone";

export class CardCollection extends Backbone.Collection {
    model(attrs, options) {
        return createModel(attrs || {}, {
            createNewCardCollection: () => new CardCollection(),
            ...options,
        });
    }
}


const collection = new CardCollection()

collection.get('someId');
