USE [GestionPrestamos]
GO

/****** Object:  Table [dbo].[Empresas]    Script Date: 10/03/2018 6:35:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Empresas]
(
    [EmpresasId] [int] IDENTITY(1,1) NOT NULL,
    [Nit] [nvarchar](30) NOT NULL,
    [Nombre] [nvarchar](50) NOT NULL,
    CONSTRAINT [PK_Empresas] PRIMARY KEY CLUSTERED 
(
	[EmpresasId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


