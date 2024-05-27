
[link1]: https://stackoverflow.com/questions/50300453/how-to-know-if-a-progressive-web-app-is-in-foreground-or-background
[link2]: https://github.com/whatwg/notifications/pull/127
[link3]: https://developer.chrome.com/docs/web-platform/notification-triggers
[link4]: https://stackoverflow.com/questions/58240785/is-it-possible-to-set-the-alarm-by-pwa-building-a-timer-alarm-clock-app
[link5]: https://stackoverflow.com/questions/71556191/send-a-notification-when-pwa-is-closed
[link6]: https://stackoverflow.com/questions/70611006/can-a-pwa-schedule-notifications-when-closed
[link7]: https://www.w3.org/TR/task-scheduler/
[link8]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API
  
# PWA TimerHub

Welcome to TimerHub a Progressive Web App (PWA) designed to provide 
a collection of timers for various purposes. This app aims to enhance 
productivity, time management, and daily routines by offering partially
customizable timers accessible across different devices.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://bahp.github.io/pwa-timerhub/)




<!-- ----------------------- -->
<!--    TABLE OF CONTENTS    -->
<!-- ----------------------- -->
## Table of Contents

<!--* [About the project](#about-the-project)-->
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Browser Compatibility](#browser-compatibility)
  * [Limitations](#limitations)
* [License](#license)

## Getting started

### Installation

This is a web app, which means you can use it without any installation procedure 
in your browser. However, since it implements Progressive Web App (PWA) technology, 
you can "install" the app for offline use. To do this, you need to add the app to 
your home screen. Here are some examples and instructions:

#### Installing on a computer

- Open the web app in your browser.
- Click the install button in the web browser’s address bar.

#### Installing on iOS (iPhone/iPad)

- Open Safari and navigate to the web app.
- Tap the Share button at the bottom of the screen.
- Select "Add to Home Screen."
- Tap "Add" in the top-right corner.

#### Installing on Android
- Open Chrome and navigate to the web app.
- Tap the menu button (three dots) in the top-right corner.
- Select "Add to Home Screen."
- Follow the prompts to add the app.

By following these steps, you can enjoy the convenience of accessing the app 
directly from your home screen and even use it offline. However, there are
some limitations that should be taken into consideration (see [Limitations](#limitations)).

### Browser Compatibility

The app has been tested in the following browsers:
- Chrome 67 (Windows and Android)
- Firefox 60
- Safari 11
- Edge 42

### Limitations

There are some limitations to using Progressive Web Apps (PWAs), particularly when it 
comes to functionalities typically handled by native apps. While significant efforts 
have been made to mitigate these limitations, such as improving offline capabilities 
and providing access to device features, the development is still ongoing. As a result, 
certain advanced functionalities and seamless performance seen in native apps may not 
yet be fully replicated in PWAs.

#### Running PWAs in the background

Running Progressive Web Apps (PWAs) in the background faces significant limitations 
because browsers, particularly on mobile devices, suspend the activity of background 
pages to conserve battery life. Overall, advanced scheduling and background tasks still 
necessitate a native app.

- Workaround 1: Refresh the page manually. [![](https://img.shields.io/badge/Implemented-brightgreen)]()
- Workaround 2: the refresh on page visibility change (see pagecycle.js) [not working yet]
- Workaround 3: Push notifications are another approach, but they require an internet connection and 
do not guarantee timely delivery.

While these workarounds can help, they do not provide a comprehensive solution.

#### Sound compatibility

Sound might not work on web apps or Progressive Web Apps (PWAs) without user interaction 
due to browser security policies designed to prevent unwanted and intrusive audio playback. 
Most modern browsers enforce a rule that requires user interaction, such as a click or tap, 
before audio can be played. This measure ensures that users have control over their audio 
experience and are not subjected to unexpected or disruptive sounds. Consequently, if a web 
app or PWA attempts to play sound automatically upon loading or in the background, it will 
likely be blocked by the browser until the user interacts with the app.

- Workaround 1: Initialize with volume off and prompt the user to initialize audio.

#### Offline functionality

While PWAs theoretically work offline, there are uncertainties regarding the app's behavior 
in scenarios such as device resets or prolonged period of internet connectivity. Further 
research is needed to understand and address potential challenges in maintaining 
functionality during offline periods. 

<!--
### Interesting links 
IT uses Service Workers

https://web.dev/learn/pwa/service-workers?hl=es-419
https://web.dev/articles/add-manifest?hl=es-419
-->

## Feedback and Support
If you encounter any issues, have suggestions for improvements, or need 
assistance, don't hesitate to reach out. You can submit bug reports, 
feature requests, or general inquiries through our GitHub Issues page. 
Your feedback helps us prioritize enhancements and address concerns 
effectively.

<!--
## License
Timerify is licensed under the MIT License. Feel free to use, modify, 
and distribute the app in accordance with the terms specified in the 
license agreement.
-->

<!--https://github.com/avadhesh18/iosPWASplash-->