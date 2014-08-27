/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

exports.URLManager = function (options) {
  var objectPrefix = options.objectPrefix || '';
  var iframeHost = options.iframeHost || '';
  var publishHost = options.publishHost || '';
  var publishHostPrefix = options.publishHostPrefix || '';

  return {
    createInstallContainerPrefix: function (folderName) {
      return options.useSubdomains ?
        publishHostPrefix + folderName + '.' + iframeHost + '/' :
        publishHostPrefix + publishHost + '/' + folderName + '/';
    },
    createURLPrefix: function (folderName) {
      return options.useSubdomains ?
        publishHostPrefix + folderName + '.' + iframeHost + '/' :
        publishHostPrefix + folderName + '.' + iframeHost + '/' + folderName + '/';
    },
    createLaunchPath: function (folderName) {
      return options.useSubdomains ?
        '/app' :
        '/' + folderName + '/app';
    },
    createIconPath: function (folderName, iconFilename) {
      return options.useSubdomains ?
        '/' :
        '/' + folderName + '/' + iconFilename;
    },
    publishHostPrefix: publishHostPrefix,
    iframeHost: iframeHost,
    publishHost: publishHost,
    objectPrefix: objectPrefix,
    useSubdomains: options.useSubdomains
  };
};
