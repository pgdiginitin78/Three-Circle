import { createRoot } from 'react-dom/client'
import './index.css'
import './custom.css'
import App from './App.jsx'

// ─── Fix: Chrome Translate / browser extensions can move DOM nodes out of
// their parent, breaking React's virtual DOM reconciliation with a
// "removeChild: The node to be removed is not a child" error.
// This patch silently ignores that specific case so React doesn't crash.
const _origRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function (child) {
  if (child.parentNode !== this) {
    return child; // node was already moved by an extension — ignore safely
  }
  return _origRemoveChild.call(this, child);
};

const _origInsertBefore = Node.prototype.insertBefore;
Node.prototype.insertBefore = function (newNode, referenceNode) {
  if (referenceNode && referenceNode.parentNode !== this) {
    return newNode; // same issue with insertBefore — ignore safely
  }
  return _origInsertBefore.call(this, newNode, referenceNode);
};

createRoot(document.getElementById('root')).render(
  <App />
)
