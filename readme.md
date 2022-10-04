# [Evolved Web Apps with SAPUI5](https://open.sap.com/courses/ui52)

## General

**Key highlights of the course**:

* Evolved best practices and recommendations for app developers
* New SAPUI5 innovations (drag&drop, OData V4, XML composites)
* Developer productivity tools and features in SAP Web IDE (SAP Web IDE has been replaced by [SAP Business Application Studio](https://developers.sap.com/tutorials/appstudio-onboarding.html)
* Optimizing apps with the UI5 tooling
* Configuring apps for SAP Fiori elements and SAP Fiori launchpad
* Adapting apps with SAPUI5 flexibility

**Development System**

* SAP Web IDE (SAP Web IDE has been replaced by [SAP Business Application Studio](https://developers.sap.com/tutorials/appstudio-onboarding.html)
* SAP Cloud Platform trial
* UI5 Tooling
* SAP Gateway demo system ES5
* **Local environment**

For further learning, we recommend that you check out the [SAP Leonardo learning journey](https://help.sap.com/learning-journeys/overview).

## Week 1 (Configuration & Development environment setup)

**Course goals**
* Learn essential UI5 basics and evolved best practices
* Deepen knowledge about advanced UI5 concepts
* Get to know the latest UI5 innovations

**Tips**

* Open **UI5 Diagnostics**: Ctrl + Option + Shift + S ('s' stands for for support)
* Open S**upport Assistant**: Ctrl + Option + Shift + P

## Week 2 (UI5 (re)discovery)

[From official documentation](https://sapui5.hana.ondemand.com/sdk/#/topic/be0cf40f61184b358b5faedaec98b2da.html) \
The descriptor for applications, components, and libraries (in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. \
The descriptor provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.

In this week you will get acquainted with:
* The latest best practices for developing web apps
* Using UI controls and control libraries
* Data Binding and usage of models
* Navigation through the views in the app
* How product standards are injected into the framework

The initial components are defined in a declarative way. Directly executable code is not used in the HTML files, because this makes the files vulnerable. \
Instead, a good practice is to enable the `ComponentSupport` module in the bootstrapping script. \
The `ComponentSupport` class provides functionality which allows you to declare your components in HTML.

Components are independent and reusable parts used in UI5 applications. \
The component configuration is stored in the `manifest.json` – the so called **application descriptor**.

The `routing` configuration is used to load and show the XML views of the application. \
It shows a single route to the app view in this project. \
The connection of the views is accomplished by triggering navigation events and letting the router do the work.

`Targets` are typically referenced in a route and define which view should be displayed when a route was hit. \
In the routing configuration, you can even add multiple targets for the same route. \
All the views configured in the respective targets will be instantiated automatically.

The model-view-controller pattern (MVC) applied in UI5, is reflected in the **webapp** folder structure:
* The **model** folder contains additional logic related to data models. \
  Models are used for data management and control filtering, sorting and formatting of data.
* The **view** folder contains views and fragments which define the UI of your app.
* THe **controller** folder contains controllers and helper classes with logic to define the behavior of your views

```
webapp
├── Component.js
├── controller
│   └── App.controller.js
├── css
│   └── style.css
├── i18n
│   └── i18n.properties
├── images
│   └── MoviesHeader.png
├── index.html
├── manifest.json
├── model
│   └── models.js
└── view
    └── App.view.xml
```

Asynchronous loading of dependencies can be seen in the `App.controller.js` file included in the template. \
In the controller file, `sap.ui.define` is used for asynchronous loading of the controller base class before extending it.