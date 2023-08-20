    decode_pinyin = function(pinyin) {
    const core = ["a", "e", "i", "o", "u", "ü"]
    let arr = pinyin.replace(/<b>|<\/b>|<div>|<\/div>/g, "").split("")
  
    is_core = function(c, c_previous_two = "", c_next = "") {
      //pre conditions
      if(c == "r" && (c_next == " " || c_next == "") && (c_previous_two != " " && c_previous_two != "")) {
        return [true, true]
      }
      //pre conditions
  
      c=c.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      for(let i = 0; i < core.length; i++) {
        if (c === core[i]) {
          return [true, false]
        }
      }
      return [false, false]
    }
  
    get_tone = function(str) {
      let pure = str.replace(/a|e|i|o|u|ü|r/g, '')
      if(pure == "") {
        return  5
      }
      else if(['ā','ē','ī','ō','ū','ǖ'].includes(pure)) {
        return 1
      }
      else if(['á','é','í','ó','ú','ǘ'].includes(pure)) {
        return 2
      }
      else if(['ǎ','ě','ǐ','ǒ','ǔ','ǚ'].includes(pure)) {
        return 3
      }
      else if(['à','è','ì','ò','ù','ǜ'].includes(pure)) {
        return 4
      }
  
      return pure
    }
  
    let tones_arr = []
    let buff = []
    
    flush = function() {
      if(buff.length > 0) {
        tones_arr.push(get_tone(buff.join("")))				
        buff = []
      }
    }
    for(let i = 0; i < arr.length;i++) {
      let res = is_core(arr[i], arr[i - 2], arr[i + 1])
      if(res[1]) {
        flush()
      }
      if(res[0]) {
        buff.push(arr[i])
      }
      else {
        flush()
      }
    }
    if(buff.length > 0) {
      tones_arr.push(get_tone(buff.join("")))	
      buff = []
    }
    return tones_arr
    }

    recolor_char = function(sentence, char, start, tone) {
        let index = sentence.indexOf(char, start)
        let insertion = "<span class=\"tone-"+tone+"\">" + char + "</span>"

        return {
            sentence: sentence.substring(0, index) + insertion + sentence.substring(index + char.length), 
            start: index + insertion.length
        }
    }
  
    recolor_pinyin = function(pinyin_element, hanzi_element) {
      let hanzi_sentence = hanzi_element.innerHTML
      let decoded = decode_pinyin(pinyin_element.innerHTML)
      let hanzi_sentence_strip = hanzi_sentence.replace(/ |<b>|<\/b>|\.|。|\?|？|!|！|<div>|<\/div>|，|，/g, '')
      let pinyin_sentence = pinyin_element.innerHTML
      let pinyin_sentence_breakdown = pinyin_sentence.split(" ")
      if(hanzi_sentence_strip.length >= decoded.length) {
        let hz_start = 0
        let py_start = 0
        for(i in decoded) {
            let hanzi_recolored = recolor_char(hanzi_sentence, hanzi_sentence_strip[i], hz_start, decoded[i])
            hanzi_sentence = hanzi_recolored.sentence
            hz_start = hanzi_recolored.start

            let pinyin_recolored = recolor_char(pinyin_sentence, pinyin_sentence_breakdown[i], py_start, decoded[i])
            pinyin_sentence = pinyin_recolored.sentence
            py_start = pinyin_recolored.start
        }
        hanzi_element.innerHTML = hanzi_sentence
        pinyin_element.innerHTML = pinyin_sentence
      }
    }

    process_document = function() {
      let pinyin_elements = document.querySelectorAll("ruby > rt")
      let hanzi_elements = document.querySelectorAll("ruby")
  
      for(let i = 0; i < hanzi_elements.length; i++) {
          let p_elem = pinyin_elements[i]
          let h_elem = hanzi_elements[i]
          h_elem.removeChild(p_elem)
          recolor_pinyin(p_elem, h_elem)
          h_elem.appendChild(p_elem)
      }
    }

    process_document()
