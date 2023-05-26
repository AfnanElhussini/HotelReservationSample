import { Directive } from '@angular/core';

@Directive({
  selector: '[appDynamicScripts]'
})
export class DynamicScriptsDirective {
  ngOnInit() {
    const scriptFiles = [
      'runtime.js',
      'polyfills.js',
      'styles.js',
      'scripts.js',
      'vendor.js',
      'main.js'
    ];

    for (const scriptFile of scriptFiles) {
      const scriptElement = document.createElement('script');
      scriptElement.src = `./${scriptFile}`;

      if (scriptFile === 'styles.js') {
        scriptElement.defer = true;
      } else {
        scriptElement.type = 'module';
      }

      document.body.appendChild(scriptElement);
    }
  }
}
