// maskDirective.js

import { debounce } from "../utils/debounce"

const applyMask = (value, pattern) => {
  let formattedValue = ''
  let valueIndex = 0

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '#') {

      if (valueIndex < value.length) {
        formattedValue += value[valueIndex]
        
        valueIndex++
      } else {
        break
      }

    } else {
      formattedValue += pattern[i]
    }
  }

  return formattedValue
}


export default {
  mounted(el, binding) {
    const pattern = binding.value

    if (!pattern) return

    const getInputEvent = (e) => {
      const sanitizedValue = e.target.value.replace(/\D/g, '')

      const maskedValue = applyMask(sanitizedValue, pattern)

      e.target.value = maskedValue

      const cursorPosition = e.target.value.length
      e.target.setSelectionRange(cursorPosition, cursorPosition)
    }

    const debounceTimeInMs = 500
    const debouncedInputEvent = debounce(getInputEvent, debounceTimeInMs)

    el.addEventListener('input', debouncedInputEvent)
    el.setAttribute('maxlength', pattern.length)

    el.__vueMask__ = debouncedInputEvent
  },

  unmounted(el) {
    el.removeEventListener('input', el.__vueMask__)
    delete el.__vueMask__
  }
}
