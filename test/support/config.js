/**
 * Mocha config
 */

mocha.timeout(60000);
mocha.ui('bdd');
mocha.reporter('html');
mocha.globals(['jQuery*', 'analytics', 'GoogleAnalyticsObject', 'ga', 'mixpanel', 'gaplugins', 'gaGlobal']);
