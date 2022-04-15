const template = document.createElement('template');
template.innerHTML = `
<style>
 <input list="fruits" id="fruit-choice" name="fruit-choice" placeholder="Choose a fruit" />
    <datalist id="fruits">
        <option value="Apple">
        <option value="Banana">
        <option value="Blueberry">
        <option value="Mango">
        <option value="Watermelon">
        <option value="Grapes">
        <option value="Orange">
        <option value="Pineapple">
        <option value="Strawberry">
    </datalist>
</style>
`;
class ComboBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define('combo-box', ComboBox);
