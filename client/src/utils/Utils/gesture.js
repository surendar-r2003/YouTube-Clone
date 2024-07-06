let lastTouchEndTime = 0;

export const handleGesture = (event, handlers) => {
  event.preventDefault();

  const now = new Date().getTime();
  const timeSinceLastTouchEnd = now - lastTouchEndTime;
  lastTouchEndTime = now;

  if (timeSinceLastTouchEnd <= 300) {
    // This is a double-tap
    const touches = event.touches;
    if (touches.length === 1) {
      const touch = touches[0];
      const { clientX, clientY } = touch;
      const side = getSide(clientX, clientY);
      handlers.doubleTap?.(side);
    }
  } else if (event.type === 'touchstart' && event.touches.length === 1) {
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const side = getSide(clientX, clientY);
    handlers.singleTap?.(side);
  } else if (event.type === 'touchstart' && event.touches.length === 3) {
    const touches = event.touches;
    const clientXs = touches.map((touch) => touch.clientX);
    const clientYs = touches.map((touch) => touch.clientY);
    const side = getSide(
      clientXs.reduce((a, b) => a + b) / 3,
      clientYs.reduce((a, b) => a + b) / 3
    );
    handlers.tripleTap?.(side);
  } else if (event.type === 'touchstart' && event.touches.length === 1) {
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const side = getSide(clientX, clientY);
    handlers.hold?.(side);
  }
};

const getSide = (clientX, clientY) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (clientX < width / 3) {
    return 'left';
  } else if (clientX > (width * 2) / 3) {
    return 'right';
  } else if (clientY < height / 3) {
    return 'top';
  } else if (clientY > (height * 2) / 3) {
    return 'bottom';
  } else {
    return 'middle';
  }
};