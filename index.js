function borderpack(options) {
  let elements = document.querySelectorAll('.borderpack');

  if (options.border_type === 'dashed') {
    options.border_type = 'dashed';
  }
  else if (options.border_type === 'dotted') {
    options.border_type = 'dotted';
  }
  else if (options.border_type === 'solid') {
    options.border_type = 'solid';
  }
  else if (options.border_type === 'double') {
    options.border_type = 'double';
  }
  else if (options.border_type === 'groove') {
    options.border_type = 'groove';
  }
  else if (options.border_type === 'ridge') {
    options.border_type = 'ridge';
  }
  else if (options.border_type === 'inset') {
    options.border_type = 'inset';
  }
  else if (options.border_type === 'outset') {
    options.border_type = 'outset';
  }
  else {
    options.border_type = 'none';
  }

  elements.forEach(image => {
    image.style.borderStyle = `${options.border_type}`;
  })
}

module.exports.borderpack = borderpack;