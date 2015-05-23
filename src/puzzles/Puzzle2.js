window.App = Ember.Application.create();

/**
 * Puzzle #2: Checking if an app is up to date
 *
 * This was a real bug that confused me for a bit at work.
 * You can see that the local and server version object member variables are initialzied to empty strings.
 * Assume they are updated to actual string values somewhere else in the code, which I will not bother to show.
 * If you are familiar with Ember.js, you'll know that the .property on the end of the canUpdate function tells
 * Ember to watch for changes in those variables, and recompute the property canUpdate as they are changed.
 * Without that, it would cache canUpdate and not recompute its return value.
 *
 * I want canUpdate to return true if the local version of a game is not the same as the latest server version.
 * As shown it does not always return the correct value. Can you spot why?
 */

App.GameObject = Ember.Object.extend({
	localVersion: "",
	serverVersion: "",
	canUpdate: function() {
		return this.get('serverVersion').length > 0 && this.get('serverVersion') != this.get('localVersion');
	}.property('localVersion', 'severVersion')
});
