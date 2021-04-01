const overlay = `
  background: rgba(0, 0, 0, 0.4);
  display: none;
  opacity: 0;
  position: fixed;
  bottom: 0;
  left: -9999rem;
  top: 0;
  transition: opacity 0.2s linear, left 0s 0.2s linear;
  width: 100%;
  z-index: 50;

  [data-modals]:not([data-modals=""]) &{
    display: block;
    opacity: 1;
    left: 0;
  }
`;

export default overlay;