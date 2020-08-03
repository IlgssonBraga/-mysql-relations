// eslint-disable-next-line no-undef
const socket = io();

socket.on('teste2', occurrences => {
  console.log(occurrences);
});

socket.on('newOccurrence', occurrence => {
  alert('Nova ocorrência.');
  console.log(occurrence);
});
