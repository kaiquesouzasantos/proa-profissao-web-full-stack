import { DOMManipulator } from './module/behavior/DOMManipulator.behavior.js'
import { PasswordGenerator } from './module/service/PasswordGenerator.service.js'

new DOMManipulator(
    new PasswordGenerator()
).updateSlider()