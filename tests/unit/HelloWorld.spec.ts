import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('render', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it("connects data 'url' with child component ModalLink (mount)", () => {
    const wrapper = mount(HelloWorld)
    const modalLink = wrapper.find({ name: 'ModalLink' })
    wrapper.setData({ url : 'somethingelse' })
    expect( modalLink.vm.url ).toBe( 'somethingelse' )
  })

  it("connects data 'url' with child component ModalLink (shallowMount)", () => {
    const wrapper = shallowMount(HelloWorld)
    const modalLink = wrapper.find({ name: 'ModalLink' })
    wrapper.setData({ url : 'somethingelse' })
    expect( modalLink.vm.url ).toBe( 'somethingelse' )
  })
})
