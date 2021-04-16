function later(value, delay = 1000): any {
  return new Promise((resolve) => setTimeout(resolve, delay, value));
}

export default later;
