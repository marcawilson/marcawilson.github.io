function runAutosortScript() {
const titleInput = document.getElementById("titleInput");
const fieldsInput = document.getElementById("fieldsInput");

let col1 = "Display";
let col2 = "Value";

col1 = `"${col1}":`;
col2 = `"${col2}":`;

let title = titleInput.value;
let fields = fieldsInput.value;

  if (/, /.test(fields)) {
    fields = fields.split(/, /);
  } else if (/,/.test(fields)) {
    fields = fields.split(/,/);
  }

  let columntext = [];
  for (let i = 0; i < fields.length; i++) {
    let displayfields_asc = `"${fields[i]} ⬆️"`;
    let displayfields_desc = `"${fields[i]} ⬇️"`;
    displayfields_asc = displayfields_asc.toUpperCase();
    displayfields_desc = displayfields_desc.toUpperCase();
    const valuefields_asc = `"'${fields[i]}' asc nulls last"`;
    const valuefields_desc = `"'${fields[i]}' desc nulls last"`;

    columntext.push(
      `{${col1}${displayfields_asc}, ${col2}${valuefields_asc} },{${col1}${displayfields_desc}, ${col2}${valuefields_desc} },`
    );
  }

  columntext = columntext.join("");
  columntext = columntext.slice(0, -1);

  const fulltext = `"${title}": {"type": "staticflex","numbers": [],"strings": [],"groups": [],"columns": {${col1} {"type": "string"},${col2} {"type": "string"}},"broadcastFacet": true,"selectMode": "single","values": [${columntext}],"label": "${title}"},`;

 document.getElementById("output").innerText = fulltext;
}
