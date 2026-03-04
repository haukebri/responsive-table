/**
 * ResponsiveTable — An Angular component that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a label injected from its column header,
 * allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Inputs:
 *   headers  — Array of column header strings, e.g. ["Name", "Age", "Email"]
 *   rows     — Array of arrays, each inner array is one row of cell values
 *   className — Optional additional class name (default: "content-table")
 */
class ResponsiveTableComponent {
  static get annotations() {
    return [
      new ng.core.Component({
        selector: "responsive-table",
        template: `
          <table [class]="className">
            <thead>
              <tr>
                <th *ngFor="let header of headers">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of rows">
                <td *ngFor="let cell of row; let colIndex = index">
                  <span class="mobile-th">{{ headers[colIndex] }}</span>
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        `,
      }),
    ];
  }

  constructor() {
    this.headers = [];
    this.rows = [];
    this.className = "content-table";
  }

  static get propDecorators() {
    return {
      headers: [new ng.core.Input()],
      rows: [new ng.core.Input()],
      className: [new ng.core.Input()],
    };
  }
}

class AppComponent {
  static get annotations() {
    return [
      new ng.core.Component({
        selector: "app-root",
        template: `
          <responsive-table [headers]="headers" [rows]="rows"></responsive-table>
        `,
      }),
    ];
  }

  constructor() {
    this.headers = [
      "table head 1",
      "head 2",
      "head 3",
      "head 4",
      "head 5",
    ];
    this.rows = [
      ["content 1 1", "content 1 2", "content 1 3", "content 1 4", "content 1 5"],
      ["content 2 1", "content 2 2", "content 2 3", "content 2 4", "content 2 5"],
      ["content 2 1", "content 2 2", "content 2 3", "content 2 4", "content 2 5"],
      ["content 3 1", "content 3 2", "content 3 3", "content 3 4", "content 3 5"],
      ["content 4 1", "content 4 2", "content 4 3", "content 4 4", "content 4 5"],
    ];
  }
}

class AppModule {
  static get annotations() {
    return [
      new ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent, ResponsiveTableComponent],
        bootstrap: [AppComponent],
      }),
    ];
  }
}
