import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    expect(wrapper.text()).toMatch(msg)
  })

  it('gets data binding of `url` to <input-link> component', async () => {
    const newUrl = 'https://chenxeed.com'
    const wrapper = shallowMount(HelloWorld)

    wrapper.setData({
      url: newUrl
    })

    await wrapper.vm.$nextTick()

    const inputLink = wrapper.find({ name: 'InputLink' })
    expect(inputLink.props('url')).toBe(newUrl)
  })
})
