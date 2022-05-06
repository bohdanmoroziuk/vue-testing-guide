/* eslint-disable @typescript-eslint/ban-types */

import {
  h,
  Suspense,
  Component,
  defineComponent,
} from 'vue';
import {
  mount,
  flushPromises,
  MountingOptions,
} from '@vue/test-utils';

export default async function mountWithSuspense<TProps>(
  component: Component,
  options?: MountingOptions<TProps>,
) {
  const TestComponent = defineComponent({
    render() {
      return h(Suspense, null, {
        default: h(component),
        fallback: h('div', 'Loading...'),
      });
    },
  });

  const wrapper = mount(TestComponent, options);

  await flushPromises();

  return wrapper;
}
