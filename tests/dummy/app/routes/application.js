import { Promise } from 'rsvp';
import { A as emberArray } from '@ember/array';
import Route from '@ember/routing/route';
import Ember from 'ember';

const {
  $: { getJSON }
} = Ember;

export default Route.extend({
  model() {
    return new Promise((resolve, reject) => {
      getJSON('/api/v1/users').then((results) => resolve(emberArray(results)), reject);
    });
  }
});
