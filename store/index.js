export const state = () => ({
    counter: 5
  });

export const mutations = {
  increment() {
    state.counter += 1;
  }
};
