import MathCharacter from './math';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
