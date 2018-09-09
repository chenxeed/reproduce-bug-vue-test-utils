# reproduce-bug-vue-test-utils

A repository to showcase the bugs found on the [`@vue/test-utils@1.0.0-beta.25`](https://github.com/vuejs/vue-test-utils) library during testing VueJS components.

Build under [`vue-cli@3.0.1`](https://github.com/vuejs/vue-cli.


## Bugs Found

- Using `shallowMount` to test a component that has child component and pass the data to the props as custom `v-model`. There are several bugs to be reported:

  - show Vue warning `[Vue warn]: Missing required prop`
  - A value passed to the child component is not detected by the child component, perhaps since it's stubbed by `shallowMount`

This just happened on using `shallowMount`, since the bug is not reproduced if using `mount`. However `shallowMount` should provide the same API implementation to support testing child component with `v-model` as well, because in my testing scenario, I'm testing a Page component that has a lot of child components and I don't want to render all by using `mount`, since I just want to test the Page components logic and its interface with the child components.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your unit tests
```
yarn run test:unit
```
