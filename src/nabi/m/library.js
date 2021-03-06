/*!
 * ${copyright}
 */

/**
 * Initialization code and shared classes of library nabi.m.
 */
sap.ui.define(["jquery.sap.global", "sap/ui/core/library"],
	function(jQuery, library) {
	"use strict";

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "nabi.m",
		dependencies : ["sap.ui.core", "sap.m" , "sap.ui.unified"],
		types: [],
		interfaces: [],
		controls: [
			"nabi.m.PDFViewer",
			"nabi.m.ImageFileUploader"
		],
		elements: [],
		noLibraryCSS: false,
		version: "0.4.0"
	});

	/* eslint-disable no-undef */
	/**
	 * A library containing mobile controls.
	 *
	 * @namespace
	 * @alias nabi.m
	 * @author Nabi Zamani, nabisoft GmbH
	 * @version "0.4.0"
	 * @public
	 */
	var thisLib = nabi.m;
	/* eslint-enable no-undef */

	/**
	 * Image Types.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ImageType = {

		/**
		 * Image Type JPEG which corresponds to mime image/jpeg.
		 * @public
		 */
		jpg : "jpg",

		/**
		 * Image Type JPEG which corresponds to mime image/png.
		 * @public
		 */
		png : "png",

		/**
		 * Default types, i.e. all of the types listed above.
		 * @public
		 */
		Default : "Default"

	};

	/**
	 * Image Scale Types.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ImageScaleType = {

		/**
		 * Scaling by factor.
		 * @public
		 */
		Factor : "Factor",

		/**
		 * Scaling by boundary.
		 * @public
		 */
		Boundary : "Boundary"

	};

	/**
	 * Image Scale Conditions describe when the scaling should be executed.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ImageScaleCondition = {

		/**
		 * Scale only if size of initial file is exceeded.
		 * @public
		 */
		Size : "Size",

		/**
		 * Scale only if the max resolution (width x height) is exceeded.
		 * @public
		 */
		Resolution : "Resolution",

		/**
		 * Scale if the max resolution (width x height) is exceeded.
		 * @public
		 */
		Boundary : "Boundary",

		/**
		 * Scale if any of Size or Resolution or Boundary condition matches.
		 * @public
		 */
		Any : "Any",

		/**
		 * Always scale image (means without checking any condition).
		 * @public
		 */
		None : "None"

	};

	/**
	 * Mime Types. Unfortunatelly, this enum does not adhere to the UI5 naming conventions
	 * for keeping "the mime key and mime string equal"
	 * (example: nabi.m.MimeType.PDF should be "PDF" instead of "application/pdf").
	 * This enum is an exeption, because mimes have slashes.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.MimeType = {

		/**
		 * Scaling by factor.
		 * @public
		 */
		PDF : "application/pdf",

		/**
		 * JPEG images.
		 * @public
		 */
		JPEG : "image/jpeg",

		/**
		 * PNG images.
		 * @public
		 */
		PNG : "image/png"

	};

	return thisLib;

});
