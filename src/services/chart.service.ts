import { Injectable } from '@nestjs/common';

import * as puppeteer from 'puppeteer';

declare const Highcharts: any;

@Injectable()
export class ChartsService {
  private _browser: any;

  constructor() {}

  /**
   * generate chart svg
   * @param options
   */
  async screenshot() {
    
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto("www.google.com", {waitUntil: 'networkidle0'});
        const html = await page.content(); // serialized HTML of page DOM.
        await browser.close();
        
        return html.toString();
      }
      
    
      
    
  

  /**
   * initilize browser
   */
  async init() {
    this._browser = await puppeteer.launch();
  }

  /**
   * kill browser
   */
  async kill() {
    await this._browser.close();
  }
}