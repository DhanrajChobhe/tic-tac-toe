$(document).ready(function(){

	var player = 1;
	var table = $('table');
	var sign = '';
	var click = 0;

	$("._1").click(function(){
		if(already_checked("._1") == 0) {
			if(player == 1) {
				$("._1").text("X").delay(1000);
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._1").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._1").text("O").delay(1000);
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._1").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._2").click(function(){
		if(already_checked("._2") == 0) {
			if(player == 1) {
				$("._2").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._2").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._2").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._2").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._3").click(function(){
		if(already_checked("._3") == 0) {
			if(player == 1) {
				$("._3").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._3").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._3").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._3").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._4").click(function(){
		if(already_checked("._4") == 0) {
			if(player == 1) {
				$("._4").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._4").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._4").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._4").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._5").click(function(){
		if(already_checked("._5") == 0) {
			if(player == 1) {
				$("._5").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._5").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._5").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._5").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}
	});
	$("._6").click(function(){
		if(already_checked("._6") == 0) {
			if(player == 1) {
				$("._6").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._6").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._6").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._6").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._7").click(function(){
		if(already_checked("._7") == 0) {
			if(player == 1) {
				$("._7").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._7").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._7").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._7").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._8").click(function(){
		if(already_checked("._8") == 0) {
			if(player == 1) {
				$("._8").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._8").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._8").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._8").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});
	$("._9").click(function(){
		if(already_checked("._9") == 0) {
			if(player == 1) {
				$("._9").text("X");
				click = click + 1;
				t = tie(click, table, "X");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"X")) {
					$("._9").text("X");
					click = 0;
					alert("Winner:X");
					reset(table);
				} else {
					return player = 2;
				}
			} else if (player == 2) {
				$("._9").text("O");
				click = click + 1;
				t = tie(click, table, "O");
				if(t == 1) {
					alert("TIE");
					reset(table);
				}
				if(win(table,"O")) {
					$("._9").text("O");
					click = 0;
					alert("Winner:O");
					reset(table);
				} else {
					return player = 1;
				}
			}
		} else {
			alert("Already marked");
		}	
	});


	$(".reset").click(function() {
		player = 1;
		reset(table);
	});
});

function win(table, sign) {
  var won = 0;
  if(table.find('._1').text() == sign && table.find('._2').text() == sign && table.find('._3').text() == sign) {
    won = 1;
  } else if (table.find('._1').text() == sign && table.find('._4').text() == sign && table.find('._7').text() == sign) {
    won = 1;
  } else if (table.find('._1').text() == sign && table.find('._5').text() == sign && table.find('._9').text() == sign) {
    won = 1;
  } else if (table.find('._4').text() == sign && table.find('._5').text() == sign && table.find('._6').text() == sign) {
    won = 1;
  } else if (table.find('._7').text() == sign && table.find('._8').text() == sign && table.find('._9').text() == sign) {
    won = 1;
  } else if (table.find('._2').text() == sign && table.find('._5').text() == sign && table.find('._8').text() == sign) {
    won = 1;
  } else if (table.find('._3').text() == sign && table.find('._6').text() == sign && table.find('._9').text() == sign) {
    won = 1;
  } else if (table.find('._3').text() == sign && table.find('._5').text() == sign && table.find('._7').text() == sign) {
    won = 1;
  }
  return won;
}

function tie(click, table, sign) {
	if(win(table, sign) == 0) {
		if(click == 9) {
			return 1;
		}
	} else {
		return 0;
	}
	
}


function already_checked(cell) {
	var a = $(cell).text();
	if(a == "X" || a == "O") {
		return 1;
	} else {
		return 0;
	}

}

function reset(table) {
	table.find("td").each(function() {
		$(this).text("+");
	})
}
