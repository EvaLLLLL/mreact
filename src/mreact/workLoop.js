/**
 * workLoop
 */

let nextUnitOfWork = null

const workLoop = (deadline) => {
  let shouldYield = false

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  requestIdleCallback(workLoop)
}

const performUnitOfWork = nextUnitOfWork => {
  // TODO
}