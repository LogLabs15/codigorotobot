const {Telegraf} = require('telegraf')

const bot = new Telegraf("6027248029:AAHygPuGWFU7sBBzMn9ioN6o-B6hpRLqg5s")

bot.command("start", ctx => {
		ctx.reply("Este es un bot creado para falicilitarles la vida a ustedes los progarmadores espero que encuentren lo que buscan.\n\n ```Un saludo de el equipo de Codigo Roto```", {
		reply_markup: {
			inline_keyboard: [
			[
             {text: "Creditos", callback_data: "credits"}
             ],
             [
             {text: "Nuestro Grupo de WhatsApp", url:"https://chat.whatsapp.com/Cuc5wOQJcWkFMl41lg1E9N"}
             ],
             [
             {text: "Mostrar Menu", callback_data: "menu"}
             ]
            ]
			
		}
	})

})

bot.action("credits", ctx => {
	ctx.answerCbQuery();
	ctx.reply("Este grupo fue creado por el grupo de programadores y comunidad de Codigo Roto \n\n CEO:@chanchitofeliz \n Admin:@BryanIBB \n Admin:@carloe_20\n\n En el caso de que vea un error contacte a los administradores")

})

bot.action("menu", ctx => {
	ctx.answerCbQuery()
	const menuMessage = "¿Que tipo de ayuda necesitas?"
	bot.telegram.sendMessage(ctx.chat.id,menuMessage, {
		reply_markup: {
			keyboard: [
				[
				{text: "Codigos de Distintos Lenguajes",callback_data: "lenguajes"}
				],
				[
				{text: "Soporte", callback_data:"support"}
				],
				[
				{text: "Dudas y Preguntas Frecuentes", callback_data:"questions"}
				],
				[
				{text: "Informacion sobre este bot", callback_data:"info"}
				],
				[
				{text: "Aporte y Donaciones al proyecto" ,callback_data: "aporte"}
				],
				[
				{text: "Servicios Pagados", callback_data: "pagar"}
				]
		    ],
		    resize_keyboard:true,
		    one_time_keyboard: true 

		}

	})
})

bot.hears("Codigos de Distintos Lenguajes",  ctx=> {
	ctx.reply("Ha sleccionado los codigos estos son los lenguajes disponibles:", {
		reply_markup: {
			keyboard: [
			[
			{text: "HTML", callback_data : "html"}
			],
			[
			{text:"CSS", callback_data: "css"}
			],
			[
			{text: "JavaScrpit", callback_data:"js"}
			],
			[
			{text: "Git", callback_data:"git"}
			],
			[
			{text: "Salir"}
			]
			],
			resize_keyboard:true,
			one_time_keyboard:true
		}
	})
})

bot.hears("Salir", ctx => {
	const menuMessage = "¿Que tipo de ayuda necesitas?"
	bot.telegram.sendMessage(ctx.chat.id,menuMessage, {
		reply_markup: {
			keyboard: [
				[
				{text: "Codigos de Distintos Lenguajes",callback_data: "lenguajes"}
				],
				[
				{text: "Soporte", callback_data:"support"}
				],
				[
				{text: "Dudas y Preguntas Frecuentes", callback_data:"questions"}
				],
				[
				{text: "Informacion sobre este bot", callback_data:"info"}
				],
				[
				{text: "Aporte y Donaciones al proyecto" ,callback_data: "aporte"}
				],
				[
				{text: "Servicios Pagados", callback_data: "pagar"}
				]			
		    ],
		    resize_keyboard:true,
		    one_time_keyboard: true 

		}

	})
})

bot.hears("Soporte", ctx => {
	ctx.reply("Hola a todos esperamos que nuesto bot sea de su agrado y no cuente con ningun error en caso de esto contactar con los Administradores:\n\n CEO:@chanchitofeliz \n Admin:@carloe_20 \n Admin:@BryanIBB")
})

bot.hears("Dudas y Preguntas Frecuentes", ctx => {
	ctx.reply("Esta seccion esta en mantenimiento.Gracias por usar nuestro bot")
})
bot.hears("Informacion sobre este bot", ctx=> {
	ctx.reply("¡Hola! Soy un bot diseñado para ayudar a los programadores en su trabajo diario. Aquí te dejo algunas de mis funciones y características:\n\n1. Ayuda con la sintaxis: Si tienes problemas con la sintaxis de un lenguaje de programación, puedo ayudarte a encontrar la solución correcta.\n\n2. Proporciono ejemplos de código: Si necesitas un ejemplo de código para una tarea específica, puedo proporcionarte algunos ejemplos para que puedas entender mejor cómo funciona.\n\n3. Respondo preguntas frecuentes: Si tienes preguntas frecuentes sobre programación, puedo responderlas rápidamente y darte información útil.\n\n5. Soy fácil de usar: Puedes interactuar conmigo a través de comandos simples y claros, lo que hace que sea fácil obtener la información que necesitas.\n\nEspero poder ser útil en tu trabajo diario como programador. ¡No dudes en preguntarme cualquier cosa!")
})

bot.hears("Aporte y Donaciones al proyecto", ctx=> {
	ctx.reply("Hola Usuario si entraste aqui es porque tienes codigos para aportar o quieres realizar una donacion al proyecto:\n\n En este momento no estan las donaciones activas pero si desea realizar un aporte puede escribirle y mandar sus sugerencias a @chanchitofeliz \n \n Un saludo del equipo de codigo roto")

})

bot.hears("Servicios Pagados", ctx => {
	ctx.reply("Hola si quieres solicitar un servicio pagado puedes escribirle a los admins y estos te diran las ofertas que tienen:\n\n CEO:@chanchitofeliz \n\n Admin:@BryanIBB \n \n Admin:@carloe_20 \n\n Sera un gusto atenderlos.Saludos")
})
bot.launch()