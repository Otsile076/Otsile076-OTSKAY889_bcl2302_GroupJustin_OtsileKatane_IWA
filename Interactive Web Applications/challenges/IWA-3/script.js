import { company } from './configuration.js'
import { year } from './configuration.js'

const message = document.querySelector('footer');
message.innerText = '© '+ (company )+ ' ' + (year);
