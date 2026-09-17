import { createRoot } from 'react-dom/client'
import './index.css'
import './custom.css'
import App from './App.jsx'

// ─── Fix: Browser extensions / GSAP pin-spacers can wrap or move DOM nodes out of
// their direct parent, breaking React's virtual DOM reconciliation with a
// "removeChild: The node to be removed is not a child" error.
// This patch safely removes the node from its actual parent so it doesn't linger in the DOM.
const _origRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function (child) {
  if (child && child.parentNode !== this) {
    if (child.parentNode) {
      try {
        return child.parentNode.removeChild(child);
      } catch {
        return child;
      }
    }
    return child;
  }
  return _origRemoveChild.call(this, child);
};

const _origInsertBefore = Node.prototype.insertBefore;
Node.prototype.insertBefore = function (newNode, referenceNode) {
  if (referenceNode && referenceNode.parentNode !== this) {
    if (referenceNode.parentNode) {
      try {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode);
      } catch {
        return newNode;
      }
    }
    return newNode;
  }
  return _origInsertBefore.call(this, newNode, referenceNode);
};

createRoot(document.getElementById('root')).render(
  <App />
)
