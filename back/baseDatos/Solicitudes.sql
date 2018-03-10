USE [GestionPrestamos]
GO

/****** Object:  Table [dbo].[Solicitudes]    Script Date: 10/03/2018 6:35:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Solicitudes]
(
    [SolicitudesId] [int] IDENTITY(1,1) NOT NULL,
    [BancoId] [int] NOT NULL,
    [ClienteId] [int] NOT NULL,
    [FechaSolicitud] [datetime] NOT NULL,
    [Estado] [char](1) NOT NULL,
    CONSTRAINT [PK_Solicitudes] PRIMARY KEY CLUSTERED 
(
	[SolicitudesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Solicitudes]  WITH CHECK ADD  CONSTRAINT [FK_Solicitudes_Bancos] FOREIGN KEY([BancoId])
REFERENCES [dbo].[Bancos] ([BancosId])
GO

ALTER TABLE [dbo].[Solicitudes] CHECK CONSTRAINT [FK_Solicitudes_Bancos]
GO

ALTER TABLE [dbo].[Solicitudes]  WITH CHECK ADD  CONSTRAINT [FK_Solicitudes_Clientes] FOREIGN KEY([ClienteId])
REFERENCES [dbo].[Clientes] ([ClienteId])
GO

ALTER TABLE [dbo].[Solicitudes] CHECK CONSTRAINT [FK_Solicitudes_Clientes]
GO