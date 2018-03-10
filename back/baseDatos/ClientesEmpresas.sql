USE [GestionPrestamos]
GO

/****** Object:  Table [dbo].[ClientesEmpresas]    Script Date: 10/03/2018 6:34:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ClientesEmpresas]
(
    [ClienteXEmpresaId] [int] IDENTITY(1,1) NOT NULL,
    [EmpresaId] [int] NOT NULL,
    [ClienteId] [int] NOT NULL,
    [Salario] [decimal](18, 0) NOT NULL,
    [FechaIngreso] [datetime] NOT NULL,
    CONSTRAINT [PK_ClientesEmpresas] PRIMARY KEY CLUSTERED 
(
	[ClienteXEmpresaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ClientesEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_ClientesEmpresas_Clientes] FOREIGN KEY([ClienteId])
REFERENCES [dbo].[Clientes] ([ClienteId])
GO

ALTER TABLE [dbo].[ClientesEmpresas] CHECK CONSTRAINT [FK_ClientesEmpresas_Clientes]
GO

ALTER TABLE [dbo].[ClientesEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_ClientesEmpresas_Empresas] FOREIGN KEY([EmpresaId])
REFERENCES [dbo].[Empresas] ([EmpresasId])
GO

ALTER TABLE [dbo].[ClientesEmpresas] CHECK CONSTRAINT [FK_ClientesEmpresas_Empresas]
GO

