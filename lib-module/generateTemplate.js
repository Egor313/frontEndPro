export function generateTemplate(contact) {
    return `
        <tr class='${CONTACT_ITEM_CLASS}'>
            <td>${contact.name}</td>
            <td>${contact.surname}</td>
            <td>${contact.phone}</td>
            <td><button class='${DELETE_BTN_CLASS}' type='button'>Видалити</button></td>
        </tr>
    `;
  }