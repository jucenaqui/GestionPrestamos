USE [GestionPrestamos]
GO

/****** Object:  Table [dbo].[Clientes]    Script Date: 10/03/2018 6:33:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Clientes]
(
    [ClienteId] [int] IDENTITY(1,1) NOT NULL,
    [Identificacion] [bigint] NOT NULL,
    [Nombres] [nvarchar](50) NOT NULL,
    [Apellidos] [nvarchar](100) NOT NULL,
    [FNacimiento] [datetime] NOT NULL,
    CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[ClienteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

