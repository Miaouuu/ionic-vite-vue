import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutModal from '../AboutModal.vue'

describe('AboutModal', () => {
  it('renders properly', () => {
    const wrapper = mount(AboutModal)
    expect(wrapper.text()).toContain('About Modal')
  })
})
